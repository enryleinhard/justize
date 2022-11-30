import pandas as pd
import numpy as np
import PyPDF2
import string
from sklearn.feature_extraction.text import CountVectorizer

# Classifying offences
def offences_list():
    with open('./datasets/offences.txt', 'r') as f:
        offences_string = f.read().splitlines()[0].replace("'",'')

    offences = {}
    for i in offences_string.split(','):
        splt = i.split(':')
        offences[int(splt[0])] = splt[1].lower()
    return offences

# Classifying races
def races_list():
    with open('./datasets/races.txt', 'r') as f:
        races_string = f.read().splitlines()[0].replace("'",'')

    races = {}
    for i in races_string.split(','):
        splt = i.split(':')
        races[int(splt[0])] = splt[1].lower()
    return races

# Extracting data from the text document.
def ext(text):
    text_subparts = text.split('II. DETAIL OF THE CASE')
    
    demographic_text = text_subparts[0]

    demographic = {}
    demographic_details = demographic_text.split('-')
    demographic_details.pop(0)
    for i in demographic_details:
        details = i.split(':')
        demographic[details[0].strip().lower()] = details[1].strip().lower()

    case_text = text_subparts[1].strip()
    case_text = case_text.translate(str.maketrans('', '', string.punctuation)).replace('\n','')
    case_text = ' '.join([words.lower() for words in case_text.split(' ')])

    df = pd.DataFrame([case_text])
    df.columns = ['script']
    df.index = ['index']
    
    keywords = df.script
    vect = CountVectorizer(stop_words='english')
    data_vect = vect.fit_transform(keywords)
    feature_names = vect.get_feature_names()
    data_vect_feat = pd.DataFrame(data_vect.toarray(), columns=feature_names)
    data_vect_feat.index = df.index

    offence_type = 0
    top_words = data_vect_feat.transpose().sort_values(by='index', ascending=False).head(20)
    for index, _ in top_words.iterrows():
        for k, v in offences.items():
            if index in v:
                offence_type = k
                break

    return demographic, offence_type

def compare(demographic, offence_type):
    age = demographic['age'].split()[0]
    sentence = demographic['sentence'].split()[0]

    selected = df[df['OFFGUIDE'] == offence_type]
    selected = selected[selected['SENTTOT'] != 0]

    variant = (selected['MONRACE'].value_counts(normalize=True) * 100).rename(index=races).to_dict()

    if demographic['sex'] == 'male':
        selected = selected[selected['MONSEX'] == 0]
    else:
        selected = selected[selected['MONSEX'] == 1]

    for k, v in races.items():
        if demographic['race'] in v:
            selected = selected[selected['MONRACE'] == k]

    average_sentence = selected['SENTTOT'].mean()
    cases_checked = selected.shape[0]

    difference = int(sentence) - average_sentence
    percentage = (difference / average_sentence) * 100

    return {
        'deviation': percentage,
        'average_sentence': average_sentence,
        'cases_checked': cases_checked,
        'variation': variant,
    }

df = pd.read_csv('./datasets/dataset.csv')
filename = './datasets/case-details/murder.pdf'
open_file = open(filename, 'rb')
case_pdf = PyPDF2.PdfFileReader(open_file)
text = case_pdf.getPage(0).extractText()

offences = offences_list()
races = races_list()

demographic, offence_type = ext(text)
print(compare(demographic, offence_type))
# script which adds 3 more writer texts from https://raw.githubusercontent.com/vijayanandrp/Thirukkural-Tamil-Dataset/master/all_thirukkural_information.json
# to the existing thirukkural.json file 

import json

kurals = None
with open('thirukkural.json') as f:
	kurals = json.load(f)

names = {'6_parimela': 'pari', '6_manikudavar': 'mani', '6_v_munusami': 'munu'}

with open('all.json') as f:
	details = json.load(f)
	keys = sorted(details.keys(), key=lambda x: int(x))
	writers = ['6_parimela', '6_manikudavar', '6_v_munusami']
	for key in keys:
		kural = kurals['kural'][int(key)-1]
		for writer in writers:
			notes = details[key].get(writer)
			if notes:
				kural[names[writer]] = ('\n'.join(notes[1:])).strip()

with open('out.json', 'w') as w:
	json.dump(kurals, w, sort_keys = True, indent = 4,
               ensure_ascii = False)

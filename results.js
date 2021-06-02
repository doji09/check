// ---------------------------------- CALCULATING ---------------------------------- //
//removing all past symptoms entry to only get the latest and convert to array
var symptomsList = document.getElementsByClassName("symptoms-list");
if (symptomsList.length > 1) {
	//"backward iteration" aka reverse loop --> i decreases as length changes due to .remove() 
	for (var i = symptomsList.length - 2; i >= 0; i--) {
		symptomsList[i].remove();
	}
}

// convert string to array
var symptoms = symptomsList[0].textContent;
var symptoms_array = symptoms.split(",");
/*for (var i = 0; i < symptoms_array.length; i++) {
	symptomsList.innerHTML = symptomsList[i];
}*/

//condition arrays for symptoms and points
var migraine_symptoms = ["temple pain", "blind spots", "sensitivity", "hormonal changes", "dizziness"]
var sinusitis_symptoms = ["sinus pain", "runny nose", "sore throat", "fever", "cough"];
var cluster_symptoms = ["pain on one side of head", "pain in one eye", "swelling in one eye", "runny nose on one side", "sensitivity"];
var tension_symptoms = ["contractions", "tender scalp", "forehead pain", "stress", "cold"]
var eyestrain_symptoms = ["blurry", "swollen eyes", "sore eyes", "eye headache", "sensitivity"];
var hemicrania_symptoms = ["ptosis", "miosis", "pain on one side of head", "swollen eyes", "sensitivity"];
var traumatic_symptoms = ["depression", "memory", "dizziness", "insomnia", "sensitivity"]
var hormone_symptoms = ["hormonal changes", "cravings", "urination", "pain on one side of head", "sensitivity"];
var rebound_symptoms = ["medications", "depression", "irritability", "runny nose", "memory"];

//total points global variables --> SHOULD WE INCLUDE THE DESCRIPTIONS/CAUSES/TREATMENT IN THESE VARIABLES TOO?
var total_migraine_points = { condition: "Migraine", score: 0, descript: "<u>Description:</u> A severe headache of varying intensity - usually a throbbing pain on the side(s) of your head. Many people with migraines experience disturbances called auras that indicate a migraine might be coming." };
var total_sinus_points = { condition: "Sinusitis", score: 0, descript: "<u>Description:</u> The inflammation of the paranasal sinuses, which are located behind the face and lead to the nasal cavity. Acute sinusitis usually lasts 7-10 days but can take up to 4 weeks. It becomes chronic if it lasts more than 12 weeks or returns more than 3x per year." };
var total_cluster_points = { condition: "Cluster Headache", score: 0, descript: "<u>Description:</u> One of the most painful and intense headaches, usually located around one eye or side of the head. Attacks can occur frequently between a couple weeks and months, usually followed by “remission periods” in which the attacks stop occurring." };
var total_tension_points = { condition: "Tension Headache", score: 0, descript: "<u>Description:</u> The most common types of headaches, which can range from moderate to intense pain. They are usually located behind/around the eye area, around the head, or neck. They usually come in episodes that occur a couple times a month, though sometimes they can be chronic." };
var total_eyestrain_points = { condition: "Eyestrain", score: 0, descript: "<u>Description:</u> A common condition of eyes becoming tired after overuse, which can include excessive use of computer screens or driving long distances." };
var total_hemicrania_points = { condition: "Hemicrania", score: 0, descript: "<u>Description:</u> A chronic and persistent headache characterized by continuous pain of varying severity. It always occurs on the same side of the face/head, and may last for more than 3 months. Most patients experience attacks of increased pain three to five times per 24-hour cycle." };
var total_traumatic_points = { condition: "Trauma Headache", score: 0, descript: "<u>Description:</u> A headache that develops within seven days of a head injury or after regaining consciousness. It usually resolves within three months, however, in 18-65% of cases, it may last longer." };
var total_hormone_points = { condition: "Hormone Headache", score: 0, descript: "<u>Description:</u> In women, fluctuating hormone levels are a major contributing factor in chronic headaches and menstrual migraines. Hormone levels change during the menstrual cycle, pregnancy, and menopause, and are also affected by oral contraceptives and hormone replacement therapies." };
var total_rebound_points = { condition: "Rebound Headache", score: 0, descript: "<u>Description:</u> A headache that results from taking analgesic (pain) medication too often to relieve your headache. The result is a daily or near daily headache for which the current medications you are taking become less and less effective." };

function check_condition() {
	//loop through each element in the symptoms array (x will be the index number)
	for (x in symptoms_array) {
		//for each index number, loop through the condition symptoms (y will be the index number)
		//migraine
		for (y in migraine_symptoms) {
			//console.log(symptoms_array[x], migraine_symptoms[y]);
			//if the two symptoms match, it will call the corresponding function with the parameter being the index number that matched
			if (symptoms_array[x] == migraine_symptoms[y]) {
				//console.log("match")
				//console.log(y)
				migraine(y);
			}
		}
		//sinusitis
		for (y in sinusitis_symptoms) {
			if (symptoms_array[x] == sinusitis_symptoms[y]) {
				sinusitis(y);
			}
		}
		//cluster
		for (y in cluster_symptoms) {
			if (symptoms_array[x] == cluster_symptoms[y]) {
				cluster(y);
			}
		}
		//tension
		for (y in tension_symptoms) {
			if (symptoms_array[x] == tension_symptoms[y]) {
				tension(y);
			}
		}
		//eyetrain
		for (y in eyestrain_symptoms) {
			if (symptoms_array[x] == eyestrain_symptoms[y]) {
				eyestrain(y);
			}
		}
		//hemicrania
		for (y in hemicrania_symptoms) {
			if (symptoms_array[x] == hemicrania_symptoms[y]) {
				hemicrania(y);
			}
		}
		//traumatic
		for (y in traumatic_symptoms) {
			if (symptoms_array[x] == traumatic_symptoms[y]) {
				traumatic(y);
			}
		}
		//hormone
		for (y in hormone_symptoms) {
			if (symptoms_array[x] == hormone_symptoms[y]) {
				hormone(y);
			}
		}
		//rebound
		for (y in rebound_symptoms) {
			if (symptoms_array[x] == rebound_symptoms[y]) {
				rebound(y);
			}
		}
	}
}
check_condition();
order_points();

//points are already ordered so the index number of the symptom will be the index number of it's corresponding points --> add the points to total points for that condition 
function migraine(index) {
	var migraine_points = [5, 4, 3, 2, 1];
	total_migraine_points.score += migraine_points[index];
	//console.log(total_migraine_points.score, "migraine");
}

function sinusitis(index) {
	var sinusitis_points = [5, 5, 2, 2, 1];
	total_sinus_points.score += sinusitis_points[index];
	//console.log(total_sinus_points.score, "sinus");
}

function cluster(index) {
	var cluster_points = [4, 4, 3, 3, 1];
	total_cluster_points.score += cluster_points[index];
	//console.log(total_cluster_points.score, "cluster");
}

function tension(index) {
	var tension_points = [5, 4, 4, 1, 1];
	total_tension_points.score += tension_points[index];
	//console.log(total_tension_points.score, "tension");
}

function eyestrain(index) {
	var eyestrain_points = [4, 3, 3, 3, 2];
	total_eyestrain_points.score += eyestrain_points[index];
	//console.log(total_eyestrain_points.score, "eyestrain");
}

function hemicrania(index) {
	var hemicrania_points = [5, 5, 2, 2, 1];
	total_hemicrania_points.score += hemicrania_points[index];
	//console.log(total_hemicrania_points.score, "hemicrania");
}

function traumatic(index) {
	var traumatic_points = [5, 3, 3, 3, 1];
	total_traumatic_points.score += traumatic_points[index];
	//	console.log(total_traumatic_points.score, "trauma");
}

function hormone(index) {
	var hormone_points = [5, 4, 3, 2, 1];
	total_hormone_points.score += hormone_points[index];
	//	console.log(total_hormone_points.score, "hormone");
}

function rebound(index) {
	var rebound_points = [5, 4, 4, 1, 1];
	total_rebound_points.score += rebound_points[index];
	//	console.log(total_rebound_points.score, "rebound");
}

function order_points() {
	var points = [total_migraine_points, total_sinus_points, total_cluster_points, total_tension_points, total_eyestrain_points, total_hemicrania_points, total_traumatic_points, total_hormone_points, total_rebound_points];

	/*  1. Compare Object "a" and Object "b" in array "points" 
		2. If the score of b > score of a, sort b before a, 
			else if the score of b < score of a, sort a before b
			else, do not change the order                            */
	points.sort((a, b) => (b.score > a.score) ? 1 : -1)

	for (var i = 0; i < 5; i++) {
		if (points[i].score == 0) {
			continue;
		} //${i+1}.
		else {
			var results_page = document.getElementById("results");
			var collapsible_row = `<button class="collapsible"> ${points[i].condition} (${Math.round(points[i].score * 100 / 15)}%)</button><div class="content"><p>${points[i].descript}</p></div>`
			var $div = document.createElement('div');
			$div.className = "condition";
			$div.innerHTML = collapsible_row;
			results_page.appendChild($div);

			var results_form = document.getElementById("results-form");
			var input = `<input type="hidden" name="condition" value="${points[i].condition} (${Math.round(points[i].score * 100 / 15)}%)">`
			var $div_form = document.createElement('div');
			$div_form.innerHTML = input;
			results_form.appendChild($div_form);
		}
	}
};
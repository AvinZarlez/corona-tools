import * as vscode from 'vscode';

let search_blank_url 	= "https://docs.coronalabs.com/";
let search_url 			= "https://cse.google.com/cse?cx=009283852522218786394%3Ag40gqt2m6rq&q=";

export async function openURL (s?: string) {
	if (!s) { s = search_blank_url; }
	else { s = search_url+s; }

	await vscode.env.openExternal(vscode.Uri.parse(s));

	return true;
}

// Slice and Trim
export function prepareInput(input: string, start: number, end: number) {
	//input is the whole line, part of which is selected by the user (defined by star/end) 
		
	if (start >= end) { return ""; }
		
	//Slice to just the selection
	input = input.slice(start,end);
		
	//Trim white space
	input = input.trim();
		
	//Possible future addition:
	//Check right here if valid variable/function name to search?
		
	//Everything looks good by this point, so time to open a web browser!
	return input;
}

export function openCoronaDocs (input: string, start: number, end: number) {	
	//Use the node module "open" to open a web browser
	openURL(prepareInput(input,start,end));
}
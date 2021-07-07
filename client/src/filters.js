export function URLBanner(Serie){
	return `/src/assets/${Serie.ID}-banner.jpg`;
};
export function URLSerie(Serie){
	return "/serie/"+Serie.ID;
};
export function DateToString(Data){
    let [dd, mm, aaaa] = [Data.getDate(), Data.getMonth()+1, Data.getFullYear()]
    return `${dd}/${mm}/${aaaa}`;
};

var words = [
    "acres","adult","advice","arrangement","attempt","August","autumn","border","breeze","brick","calm","canal","cast","chose","claws","coach","coding","constantly","contrast","cookies","customs","damage","deeply","depth","discussion","doll","donkey","Egypt","Ellen","essential","exchange","exist","explanation","facing","film","finest","fireplace","floating","folks","fort","garage","grabbed","grandmother","gym","habit","happily","Harry","heading","hunter","Illinois","image","independent","instant","January","kids","label","Lee","locomotive","lungs","manufacturing","Martin","mathematics","melted","memory","mill","mission","monkey","Mount","mysterious","neighborhood","Norway","nuts","occasionally","official","ourselves","palace","Pennsylvania","Philadelphia","plates","poetry","policeman","positive","possibly","practical","pride","promised","recall","relationship","remarkable","require","rhyme","rocky","rubbed","rush","sale","satellites","satisfied","scared","selection","shake","shaking","shallow","shout","silly","simplest","slight","slip","slope","soap","solar","species","spin","stiff","swung","tales","thumb","tobacco","toy","trap","treated","tune","university","vapor","vessels","wealth","wolf","zoo",
]

function randomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

export { randomWord }
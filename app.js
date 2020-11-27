var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var extension = ['.cl']
//, '.net', '.us', '.io', '.cl'];

var domain=[];
var hack=[];

function generator() {

    for (let i = 0; i < pronoun.length; i++) {

        for (let j = 0; j < adj.length; j++) {
    
            for (let q = 0; q < noun.length; q++) {

                for (let w = 0; w < extension.length; w++) {
                    domain[i] = pronoun[i] + adj[j] + noun[q] + extension[w];
                    console.log(domain[i]);

                    hack[i] = pronoun[i] + adj[j] + noun[q].substr(0,noun[q].length -2).trim() + '.' + noun[q].substr(-2).trim();
                    console.log(hack[i]);
                }
            }
        }
    }
}

generator();
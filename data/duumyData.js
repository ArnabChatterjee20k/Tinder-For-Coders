const img = "https://api.dicebear.com/6.x/personas/png?seed="
export default [
    dummyFactory("Arnab","Chatterjee1","GUI",img+"arnacb1",16),
    dummyFactory("Arnab","Chatterjee2","Backend",img+"arsnab2",17),
    dummyFactory("Arnab","Chatterjee3","Full Stack",img+"arnab12",18),
    dummyFactory("Arnab","Chatterjee4","Android",img+"arnawb22",19),
    dummyFactory("Arnab","Chatterjee5","Cloud",img+"arwnwwwssab44",19),
]

function dummyFactory(firstName,lastName,occupation,photoUrl,age){
    return {firstName,lastName,occupation,photoUrl,age}
}

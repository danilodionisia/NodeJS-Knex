const database = require('./database');

/*

//como fazer insert

let dados = [
    {
        nome: 'Top Gear',
        preco: 10.99
    },
    {
        nome: 'Age of Empires',
        preco: 29.99
    },
    {
        nome: 'Strangers Things',
        preco: 39.99
    }
]

database.insert(dados).into('games').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

*/


/*
//como fazer select simples
database.select().from('games').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

*/

/*
//select de alguns campos apenas
database.select(['nome', 'preco']).from('games').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
*/

/*
//insert com selct nested

database.insert({nome: 'Fifa', preco: '199.99'}).into('games').then(data => {
    database.select(['nome', 'preco']).from('games').then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
}).catch(error => {
    console.log(error);
});
*/

/*
//select com where
//where
//whereRaw
//database raw
database.select().where({'nome': 'Top Gear'}).table('games').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});



database.raw('select * from games where preco >= "29.99"').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

*/


/*
//exemplo de delete

database.where({preco: '29'}).delete().table('games').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

*/

/*
//exemplo de update
database.where({id: 5}).update({preco: 159.99, nome: 'Knickt Sports'}).table('games').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
*/


/*
//exemplo de order by
database.select().table('games').orderBy('id', 'desc').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
*/


let studios = [
    {
        nome: 'razor'
    },
    {
        nome: 'blazzer'
    },
    {
        nome: 'heruko'
    }
]
/*
database.insert(studios).table('studio').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
*/

database.select(['studio.nome', 'games.nome as jogo', 'games.preco'])
    .table('games')
    .innerJoin('studio', 'games.studio', 'studio.id')
    .orderBy('games.preco', 'asc')
    .where('games.id', 3)
    .then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});
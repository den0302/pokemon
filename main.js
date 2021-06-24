fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (resp) { return resp.json() })
    .then(function(data) {
        console.log(data)

        document.querySelector('.ditto_name').textContent = data.name

        document.querySelector('.ditto_abilities').textContent = data.abilities.length

        document.querySelector('.ditto_f-ability').textContent = data.abilities[0].ability.name

        document.querySelector('.ditto_s-ability').textContent = data.abilities[1].ability.name

        document.querySelector('.ditto_exp').textContent = data.base_experience

        document.querySelector('.ditto_order').textContent = data.order

        document.querySelector('.ditto_item-1').textContent = data.held_items[0].item.name

        document.querySelector('.ditto_item-2').textContent = data.held_items[1].item.name

        document.querySelector('.ditto_type').textContent = data.types[0].type.name

    }) 









    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(function (resp) { return resp.json() })
    .then(function(data) {
        console.log(data)

        document.querySelector('.bulbasaur_name').textContent = data.name

        document.querySelector('.bulbasaur_abilities').textContent = data.abilities.length

        document.querySelector('.bulbasaur_f-ability').textContent = data.abilities[0].ability.name

        document.querySelector('.bulbasaur_s-ability').textContent = data.abilities[1].ability.name

        document.querySelector('.bulbasaur_exp').textContent = data.base_experience

        document.querySelector('.bulbasaur_order').textContent = data.order

        document.querySelector('.bulbasaur_item-1').textContent = data.held_items.length

        document.querySelector('.bulbasaur_type-1').textContent = data.types[0].type.name

        document.querySelector('.bulbasaur_type-2').textContent = data.types[1].type.name

    })  
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)
let pinetree = newImage( 'assets/pine-tree.png','450px','200px');
newImage('assets/pillar.png','350px','200px'); 
newImage('assets/tree.png','200px','300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png',' 150px ','100px');
newImage('assets/well.png ','500px', ' 425px');
newItem('assets/shield.png','165px,','185px');
newItem('assets/sword.png','500px','405px');
newItem('assets/staff.png','165px','185px');
/*
document.createElement('img')
pinetree.src ='assets/pine-tree.png'
pinetree.style.position = 'fixed'
pinetree.style.left = '450px'
pinetree.style.bottom = '200px'
document.body.append(pinetree)
/*

let newImage =newImage('assets/tree.png','200px','300px')
document.body.append(newImage)

/*newImage('assets/pillar.png (350px from the left, 100px from the bottom')
newImage('assets/crate.png (150px from the left, 200px from the bottom')
newImage('assets/well.png (500px from the left, 425px from the bottom')
let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})
let sheild = document.createElement('img')
sheild.src ='assets/sheild.png'
sheild.position ='fixed'
sheild.left ='165px'
sheild.bottom = '185'
document.body.append(sheild)
sheild.addEventListener('click',function(){
    sheild.remove()
})
let staff = document.createElement('img')
staff.src ='assets/sheild.png'
staff.position ='fixed'
staff.left ='165px'
staff.bottom = '185'
document.body.append(sheild)
staff.addEventListener('click',function(){
    staff.remove()
})
('assets/sky.png',0,horizon,window.innerWidth/100,height of sky/100)
('assets/grass.png',0,0,window.innerWidth/100,height of grass/100)
*/

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('dblclick', () => {
        item.remove()
       /* let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
        */
    })
    return item

}

function newImage(url,left,bottom){
    let item = document.createElement('img');
    item.src =url;
    item.style.position = 'fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item);
    return item;
}










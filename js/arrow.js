const todos=[{
    title: 'Boy',
    isTrue: true
},{
    title: 'From Dhaka?',
    isTrue: false
},{
    title: 'Madridista?',
    isTrue: true
},{
    title: 'Does Smoke?',
    isTrue: false
},{
    title: 'Graduated?',
    isTrue: true
},{
    title: 'Post Graduated?',
    isTrue: false
}]

console.log('Things that are False');

const thingsNotTrue = todos.filter((todo)=> todo.isTrue===false)

thingsNotTrue.forEach(anon =>  console.log(anon.title));


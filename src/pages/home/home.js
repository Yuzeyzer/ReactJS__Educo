import React from 'react';

function Home() {
  const toDos = [
    { id: 1, title: 'First valute', completed: false },
    { id: 2, title: 'Second valute', completed: true },
  ];
  const [state, setState] = React.useState(toDos);

  const [valuteTitle, setValuteTitle] = React.useState('');

  const addValute = () => {

  }

  return (
    <div className='home'>
      <div className='container'>
        <div className='home__content'>
          <div className='home__search seacrh'>
            <h1>Приложение добавления и удаления валют</h1>
            <div className='input-field'>
              <input
                type='text'
                value={valuteTitle}
                onChange={(event) => setValuteTitle(event.target.value)}
                onKeyPress={addValute}
              />
              <label>Имя валюты</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// export default class App extends Component {
//   state = {
//     todos: [
//       { id: 1, title: 'First todo', completed: false },
//       { id: 2, title: 'Second todo', completed: true },
//     ],
//   };

//   render() {
//     return (
//       <div className='container'>
//         <h1>Todo app</h1>

//         <div className='input-field'>
//           <input type='text' />
//           <label>Todo name</label>
//         </div>

//         <TodoList todos={this.state.todos} />
//       </div>
//     );
//   }
// }

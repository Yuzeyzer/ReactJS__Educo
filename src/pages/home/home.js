import React from 'react';

function Home() {
  const valutes = [
    { id: 1, title: 'First valute', completed: false },
    { id: 2, title: 'Second valute', completed: true },
  ];
  const [valute, setValute] = React.useState(valutes);

  const [valuteTitle, setValuteTitle] = React.useState('');

  const addValute = (event) => {
    event.preventDefault();
    setValute([
      ...valute,
      {
        id: Date.now(),
        title: valuteTitle,
        completed: false,
      },
    ]);
  };

  return (
    <div className='home'>
      <div className='container'>
        <div className='home__content'>
          <h1 className='form__title'>Приложение добавления и удаления валют</h1>
          <form onSubmit={addValute} className='home__form form'>
            <div>
              <label className='form__label'>Имя валюты</label>
              <input
                className='form__input'
                type='text'
                value={valuteTitle}
                onChange={(event) => setValuteTitle(event.target.value)}
                onKeyPress={addValute}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}//otkroi browser

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

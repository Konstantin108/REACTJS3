import './App.css';
import {useState} from "react";

const Message = ({name, text}) => {
  return <div className={'block'}>
    <div className={'block__name'}>сообщение от {name}</div>
    <div className={'block__text'}>{text}</div>
  </div>
}

function App() {

  const [messages] = useState(
      [
        {name: 'Сергей Петров', text: 'Привет, как дела?'},
        {name: 'Мирон Фёдоров', text: 'Кто убил Марка?'},
        {name: 'Пётр Александров', text: 'Что я здесь делаю?'},
      ]
  );

  return (
      <div className="App">

        {messages.map(({name, text}, index) =>
            <Message key={index} name={name} text={text}/>
        )}

      </div>
  );
}

export default App;

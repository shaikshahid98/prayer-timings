import logo from './logo.svg';
import './App.css';
import Wrapper from './UI/Wrapper';
import PrayerTable from './table/PrayerTable';
import OtherData from './table/OtherData';

const Other = [
  {
      id: '1',
      info : 'End time of Fajar',
      content: '5:40 AM'
  },
  {
      id:'2',
      info : 'Ishraq time begins',
      content : '6:00 AM'
  },
  {
      id:'3',
      info : 'Zawal time begins',
      content : '12:30 PM'
  }
]

function App() {


  return (
    <div>
      <Wrapper>
      <PrayerTable />
      {Other.map((item,index)=>
   <OtherData key={index} info = {item.info} content= {item.content} ></OtherData>)
    }
      </Wrapper>
      </div>
  );
}

export default App;

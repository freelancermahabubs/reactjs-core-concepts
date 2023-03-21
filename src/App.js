import logo from './logo.svg';
import './App.css';

const number = 1111;
const singers = [
{name: 'Dr. Mahfuz', job: 'Singer'},
{name: 'Eva Rahman', job: 'Singer2'},
{name: 'Agun Rahman', job: 'Shopno'},
{name: 'Shobro DAv', job: 'Pathor'}
]

const singerStyle = {
  color: 'blue',
  backgroundColor: 'white'
  
}


const hospitalss = [
{name: 'Netrokona', site: '546'},
{name: 'dfs', site: '485'},
{name: 'Netrofsadkona', site: '45'},
{name: 'fsda', site: '45'},
{name: 'asd', site: '54'}
]

function App() {
  const nayoks = ['Rubel', 'Bappa', 'Kuber', 'Jashim', 'Slmansha', 'Riyaz', 'Razzak', 'anwear'];

  const hospitals =['Netrokona', 'brisiri,', 'kamalgan', 'nator', 'bag'];


  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="Maaaa"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New Component. YAY</h5>
      <p>Rock Mama React Mama</p>
      <Friend phone="01474563"></Friend>
      <Friend movie="Shingam" phone="465123"></Friend>
      <Friend></Friend>
      {
        hospitals.map(hospital => <li>Name: {hospital}</li>)
      }


      {/* {
        hospitals.map(hospital => <Hospitals name ={hospital}></Hospitals>)
      } */}

      {
        hospitalss.map(hospital => <Hospitals name={hospital.name} site={hospital.site}></Hospitals>)
      }

      {/* <Hospitals name="Netrokona Sadar Hospital" site="455456"></Hospitals>
      <Hospitals name="Mymenshingh Sadar Hospital" site="4554"></Hospitals> */}
    </div>
  );
};

function Person(props){
  return (
    <div className='person'>
  <h1>{props.name}</h1>
  <p></p>

  </div>
  );
};

function Friend(props){
  console.log(props)
  return(
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>Phone Number: {props.phone}</p>
    </div>
  );
};

function Hospitals(props){
  return(
    <div className='hospital'>
      <h3>name: {props.name}</h3>
      <p>site: {props.site}</p>
      <p></p>
    </div>
  );
};
export default App;

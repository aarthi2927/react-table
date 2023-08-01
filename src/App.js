import './App.css';
export const data1=[{id:1,name:'aaa',age:20},
{id:2,name:'mr.xxxx',age:22},
{id:3,name:'miss.yyy',age:23},
{id:4,name:'mrs.jjjj',age:20},
{id:5,name:'mrs.jjjj mrs.jjjj mrs.jjjj mrs.jjjj mrs.jjjj',age:20},
{id:6,name:'mrs.sss',age:20},
{id:7,name:'mrs.jr',age:'Note that the development build is notoptimized.To create a production build, use'}]

function App() {
  return (
    <div className="App">
      <h1>Display table item using map</h1>
  <Table />
    </div>
  );
}
export function Table() {
  return (
         <table>
<Tablehead/>
{data1.map((l1,index)=>(
  <Tablebody key={index} id={l1.id} name={l1.name} age={l1.age}/>
))
}</table>
);
}
export function Tablehead() {
  return (
   <thead>
    <th>id</th>
    <th>name</th>
    <th>age</th>
   </thead>
  );
}

export function Tablebody({id,name,age,index}) {
  return (
   <tbody >
 <tr key={index}>
      <td>{id}</td>
    <td>{name}</td>
    <td>{age}</td>
    </tr>
      </tbody>
  );
}
export default App;
/*<tbody>
 <tr>
   <td>1</td>
   <td>aaa</td>
   <td>20</td>
 </tr>
 <tr>
   <td>1</td>
   <td>aaa</td>
   <td>20</td>
 </tr>
 <tr>
   <td>1</td>
   <td>aaa</td>
   <td>20</td>
 </tr>
 <tr>
   <td>1</td>
   <td>aaa</td>
   <td>20</td>
 </tr>

</tbody> */

/*

const mappedData = data1.map((l1,index)=>(
  <Tablebody id={l1.id} name={l1.name} age={l1.age} key={index} />
));
*/
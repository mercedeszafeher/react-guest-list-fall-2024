import './App.css';
import GuestForm from './components/GuestForm';
import GuestList from './components/GuestsList';

export default function App() {
  return (
    <div className="App">
      <h1>The Guest List</h1>
      <GuestForm />
      <GuestList />
    </div>
  );
}

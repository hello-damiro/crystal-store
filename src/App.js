import Crystal from './components/shared/Crystal';
function App() {
    return (
        <div className="App">
            <Crystal color="#C42D2D" width="120" meaning="fertility" />
            <Crystal color="#EEC900" width="150" meaning="breakthrough" />
            <Crystal color="#6A0DAD" meaning="flow" shadowed="true" shadowGap="32" />
        </div>
    );
}

export default App;

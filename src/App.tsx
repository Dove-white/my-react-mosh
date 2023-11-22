import ListGroup from "./Component/ListGroup";

function App() {
  let items = ["Ghana", "USA", "Paris", "Togo", "China"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        heading="Countries"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

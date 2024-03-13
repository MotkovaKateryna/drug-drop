import DrugDropBoard from "components/DrugDropBoard/DrugDropBoard";
// import SortCard from "components/SortCard/SortCard";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <DrugDropBoard/>
      {/* <SortCard/> */}
    </div>
  );
};

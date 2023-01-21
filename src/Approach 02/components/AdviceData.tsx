interface AdviceDataProps {
  dataID: number;
  dataAdvice: string;
}

const AdviceData = ({ dataID, dataAdvice }: AdviceDataProps) => {
  return (
    <>
      <p className="advice-no">Advice #{dataID}</p>
      <q className="advice-text">{dataAdvice}</q>
    </>
  );
};

export default AdviceData;

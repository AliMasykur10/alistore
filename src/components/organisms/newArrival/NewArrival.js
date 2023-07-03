import NewArrivalComp from "../../molecules/newArrivalComp/NewArrivalComp";

export default function NewArrival() {
  return (
    <div className="bg-white flex flex-col ">
      <div className="">
        <h1 className="text-2xl font-bold">NEW ARRIVALS</h1>
        <p>Make Bold Fashion Choices With Our Latest Product</p>
      </div>
      <NewArrivalComp />
    </div>
  );
}

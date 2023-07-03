import NewArrivalComp from "../../molecules/newArrivalComp/NewArrivalComp";

export default function NewArrival() {
  return (
    <div className="sm:flex justify-between items-center gap-3 p-7  mb-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-4 ">NEW ARRIVALS</h1>
        <p className="w-3/4 sm:text-xl ">Make Bold Fashion Choices With Our Latest Product</p>
      </div>
      <NewArrivalComp />
    </div>
  );
}

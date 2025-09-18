import Meal from "./Meal";
export default function MainProducs({ data, loading }) {
  if (!loading) {
    return (
      <section className="meals-section mx-auto  max-w-200 px-6 lg:px-0 lg:mr-0">
        <h2 className="mb-6 font-bold text-[2.5rem]">Desserts</h2>
        <div className="meals grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Meal
              key={item.name}
              thumbnail={item.image.thumbnail}
              mobile={item.image.mobile}
              tablet={item.image.tablet}
              desktop={item.image.desktop}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="meals-section mx-auto max-w-200 px-6 lg:px-0 lg:mr-0">
        <h2 className="mb-6 font-bold text-gray-300 bg-gray-300 rounded-xl text-[2.5rem] w-fit">
          Desserts
        </h2>
        <div className="meals grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative flex flex-col w-75 lg:w-64">
              <figure className="relative">
                <div className="h-48 w-full rounded-lg bg-gray-300"></div>
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-5 mx-auto w-[40%] lg:w-[60%] rounded-full border border-gray-200 bg-gray-100 py-3 shadow-sm">
                  <div className="mx-auto h-4 w-20 rounded bg-gray-300"></div>
                </span>
              </figure>
              <div className="meal-info mt-6 flex flex-col gap-1">
                <div className="h-3 w-1/2 rounded bg-gray-300"></div>
                <div className="h-5 w-3/4 rounded bg-gray-300"></div>
                <div className="h-4 w-1/4 rounded bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

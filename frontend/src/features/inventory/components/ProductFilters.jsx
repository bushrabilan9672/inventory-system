export default function ProductFilters({

  category,
  setCategory,

  supplier,
  setSupplier,

  sort,
  setSort,

  categories,

  suppliers,

}) {

  return (

    <div className="grid gap-4 md:grid-cols-3">

      {/* Category */}

      <select

        value={category}

        onChange={(e) => setCategory(e.target.value)}

        className="h-12 rounded-xl border border-slate-300 bg-white px-4"

      >

        <option value="">All Categories</option>

        {categories.map((item) => (

          <option
            key={item}
            value={item}
          >
            {item}
          </option>

        ))}

      </select>

      {/* Supplier */}

      <select

        value={supplier}

        onChange={(e) => setSupplier(e.target.value)}

        className="h-12 rounded-xl border border-slate-300 bg-white px-4"

      >

        <option value="">All Suppliers</option>

        {suppliers.map((item) => (

          <option
            key={item}
            value={item}
          >
            {item}
          </option>

        ))}

      </select>

      {/* Sort */}

      <select

        value={sort}

        onChange={(e) => setSort(e.target.value)}

        className="h-12 rounded-xl border border-slate-300 bg-white px-4"

      >

        <option value="">Sort By</option>

        <option value="name">Product Name</option>

        <option value="stock">Stock Quantity</option>

        <option value="price">Selling Price</option>

      </select>

    </div>

  );

}
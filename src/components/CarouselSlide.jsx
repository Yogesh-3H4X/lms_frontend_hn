function CarouselSlide({ image, title, name, description, slidenumber, totelslides }) {
  return (
    <div id={`slide-${slidenumber}`} className="carousel-item relative w-full">
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        
        {/* Image */}
        <img
          src={image}
          className="w-40 rounded-full border-2 border-gray-400"
          alt={name}
        />

        {/* Description */}
        <p className="text-xl text-gray-200">{description}</p>

        {/* Title */}
        <h3 className="text-2xl font-semibold">{title}</h3>

        {/* Navigation Buttons */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          {/* Previous */}
          <a
            href={`#slide-${slidenumber === 1 ? totelslides : slidenumber - 1}`}
            className="btn btn-circle"
          >
            ❮
          </a>

          {/* Next */}
          <a
            href={`#slide-${(slidenumber % totelslides) + 1}`}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;

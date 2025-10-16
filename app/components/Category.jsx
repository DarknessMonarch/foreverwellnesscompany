"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/style/category.module.css";
import { MdOutlineKeyboardArrowLeft as LeftIcon } from "react-icons/md";
import { MdOutlineKeyboardArrowRight as RightIcon } from "react-icons/md";

const CATEGORIES = [
  {
    id: 'electronics',
    name: "Electronics",
    href: "/products?category=electronics",
    image: "https://cdn.pixabay.com/photo/2018/02/22/15/41/wood-3173282_640.jpg",
  },
  {
    id: 'clothing',
    name: "Clothing",
    href: "/products?category=clothing",
    image: "https://cdn.pixabay.com/photo/2017/07/04/07/31/pan-2470217_640.jpg",
  },
  {
    id: 'home',
    name: "Home",
    href: "/products?category=home",
    image: "https://cdn.pixabay.com/photo/2020/02/07/07/18/kitchen-4826379_640.jpg",
  },
  {
    id: 'beauty',
    name: "Beauty",
    href: "/products?category=beauty",
    image: "https://cdn.pixabay.com/photo/2020/02/07/07/18/kitchen-4826379_640.jpg",
  },
  {
    id: 'sports',
    name: "Sports",
    href: "/products?category=sports",
    image: "https://cdn.pixabay.com/photo/2020/02/07/07/18/kitchen-4826379_640.jpg",
  },
  {
    id: 'books',
    name: "Books",
    href: "/products?category=books",
    image: "https://cdn.pixabay.com/photo/2020/02/07/07/18/kitchen-4826379_640.jpg",
  },
  {
    id: 'toys',
    name: "Toys",
    href: "/products?category=toys",
    image: "https://cdn.pixabay.com/photo/2020/02/07/07/18/kitchen-4826379_640.jpg",
  },
  {
    id: 'other',
    name: "Other",
    href: "/products?category=other",
    image: "https://cdn.pixabay.com/photo/2020/02/07/07/18/kitchen-4826379_640.jpg",
  },
];

const CategorySkeleton = () => (
  <div className={styles.categoryImageContainer}>
    <div className={`${styles.categoryWrapperImageLoading} skeleton`}></div>
  </div>
);

export default function Category() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const gridRef = useRef(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      if (gridRef.current) {
        const container = gridRef.current;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const overflow = scrollWidth > clientWidth;

        setHasOverflow(overflow);
        setMaxScroll(overflow ? scrollWidth - clientWidth : 0);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [isLoading]);

  const handlePrevious = () => {
    if (!hasOverflow || isLoading) return;

    const scrollAmount = 300;
    const newPosition = Math.max(0, scrollPosition - scrollAmount);
    setScrollPosition(newPosition);

    if (gridRef.current) {
      gridRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (!hasOverflow || isLoading) return;

    const scrollAmount = 300;
    const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
    setScrollPosition(newPosition);

    if (gridRef.current) {
      gridRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (categoryHref) => {
    router.push(categoryHref);
  };

  const canGoPrevious = hasOverflow && scrollPosition > 0 && !isLoading;
  const canGoNext = hasOverflow && scrollPosition < maxScroll && !isLoading;

  return (
    <section className={styles.Categorycontainer}>
      <div className={styles.CategoryHeader}>
        <h1>Filter by Category</h1>
        <div className={styles.CategoryController}>
          <button
            className={`${styles.navButton} ${
              !canGoPrevious ? styles.disabled : ""
            }`}
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            aria-label="Previous categories"
          >
            <LeftIcon className={styles.navBtnIcon} />
          </button>
          <button
            className={`${styles.navButton} ${
              !canGoNext ? styles.disabled : ""
            }`}
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next categories"
          >
            <RightIcon className={styles.navBtnIcon} />
          </button>
        </div>
      </div>

      <div
        ref={gridRef}
        className={styles.categoriesGrid}
        onScroll={() => {
          if (gridRef.current && !isLoading) {
            setScrollPosition(gridRef.current.scrollLeft);
          }
        }}
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))
          : CATEGORIES.map((category) => (
              <div 
                key={category.id} 
                className={styles.categoryImageContainer}
                onClick={() => handleCategoryClick(category.href)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.categoryWrapperImage}>
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={120}
                    height={120}
                    className={styles.categoryImage}
                  />
                </div>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
            ))}
      </div>
    </section>
  );
}
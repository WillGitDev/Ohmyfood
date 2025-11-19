'use client';

import Image from 'next/image';
import styles from './restaurantCard.module.css';
import { useState } from 'react';
import Link from 'next/link';

function RestaurantCard({ image, title, location, slug, isNew = false }) {
    const [islike, setIsLike] = useState(false);

    return (
        <Link href={`/restaurant/${slug}`}>
            <div className={styles.cardContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={image}
                        alt="Une image d'un plat"
                        fill
                        sizes="(min-width: 1024px) 490px, 100vw"
                    />
                    {isNew && <span className={styles.new}>Nouveau</span>}
                </div>
                <div className={styles.contentCardContainer}>
                    <div className={styles.textContainer}>
                        <h3 className={styles.titleCard}>{title}</h3>
                        <p className={styles.locationCard}>{location}</p>
                    </div>
                    <i
                        className={
                            islike
                                ? `fa-solid fa-heart ${styles.likeColor}`
                                : 'fa-regular fa-heart'
                        }
                        onClick={() => setIsLike(!islike)}
                        aria-label={
                            islike
                                ? 'Retirer des favoris'
                                : 'Ajouter aux favoris'
                        }
                    ></i>
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;

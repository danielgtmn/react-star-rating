import React, { useState } from 'react';
import { Star } from 'lucide-react';

export interface StarRatingProps {
    onChange?: (rating: number) => void;
    initialRating?: number;
    size?: number;
    activeColor?: string;
    inactiveColor?: string;
    minStars?: number;
    maxStars?: number;
    showRatingText?: boolean;
    showMinStarsText?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
                                                          onChange,
                                                          initialRating = 0,
                                                          size = 32,
                                                          activeColor = '#FBBF24',
                                                          inactiveColor = '#D1D5DB',
                                                          minStars = 1,
                                                          maxStars = 5,
                                                          showRatingText=true,
    showMinStarsText=true
                                                      }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const validatedMinStars = Math.max(0, minStars);
    const validatedMaxStars = Math.max(validatedMinStars, maxStars);


    const handleClick = (value: number) => {
        if (value >= validatedMinStars && value <= validatedMaxStars) {
            setRating(value);
            if (onChange) {
                onChange(value);
            }
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1">
                {Array.from({length: validatedMaxStars}, (_, index) => index + 1).map((star) => (
                    <button
                        key={star}
                        className={`p-1 transition-transform ${
                            star >= validatedMinStars ? 'hover:scale-110' : 'cursor-not-allowed opacity-50'
                        }`}
                        onMouseEnter={() => star >= validatedMinStars && setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => handleClick(star)}
                        disabled={star < validatedMinStars}
                    >
                        <Star
                            size={size}
                            className="transition-colors"
                            style={{
                                fill: star <= (hover || rating) ? activeColor : 'transparent',
                                color: star <= (hover || rating) ? activeColor : inactiveColor
                            }}
                        />
                    </button>
                ))}

            </div>
            {
                showRatingText &&
                <p className="text-lg font-medium">
                    {rating ? `${rating} out of ${validatedMaxStars} stars` : 'No rating yet'}
                </p>
            }
            {
                showMinStarsText &&
                <p className="text-sm text-gray-500">
                    At least {validatedMinStars} {validatedMinStars === 1 ? 'star' : 'stars'} required
                </p>
            }
        </div>
    );
};

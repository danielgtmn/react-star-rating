# React Star Rating Component

[![npm version](https://badge.fury.io/js/@gietmanic%2Freact-star-rating.svg)](https://badge.fury.io/js/@gietmanic%2Freact-star-rating)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A simple, customizable, and accessible star rating component for React applications.

## 📦 Installation

```bash
npm install @gietmanic/react-star-rating
# or
yarn add @gietmanic/react-star-rating
# or
pnpm add @gietmanic/react-star-rating 
```

## ✨ Features

- 🌟 Customizable number of stars (min/max)
- 🎨 Custom colors and sizes
- 🔄 Controlled and uncontrolled usage
- ♿ Accessible
- 🎯 TypeScript support
- ✨ Hover effects

## 🚀 Quick Start

```jsx
import { StarRating } from '@gietmanic/react-star-rating';

function App() {
  return (
    <StarRating
      onChange={(rating) => console.log('New rating:', rating)}
      initialRating={3}
      size={32}
      activeColor="#FBBF24"
      inactiveColor="#D1D5DB"
      minStars={1}
      maxStars={10}
      showMinStarsText={true}
      showRatingText={true}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onChange` | `(rating: number) => void` | `undefined` | Callback function called when rating changes |
| `initialRating` | `number` | `0` | Initial rating value |
| `size` | `number` | `32` | Size of stars in pixels |
| `activeColor` | `string` | `'#FBBF24'` | Color of active (filled) stars |
| `inactiveColor` | `string` | `'#D1D5DB'` | Color of inactive stars |
| `minStars` | `number` | `1` | Minimum number of stars required |
| `maxStars` | `number` | `5` | Maximum number of stars available |
| `showMinStarsText` | `boolean` | `true` | Show/hide minimum stars requirement text |
| `showRatingText` | `boolean` | `true` | Show/hide current rating text |

## 📋 Usage Examples

### Basic Usage
```jsx
<StarRating onChange={(rating) => console.log(rating)} />
```

### Custom Range
```jsx
<StarRating minStars={2} maxStars={10} />
```

### Custom Colors
```jsx
<StarRating
  activeColor="#FFD700"
  inactiveColor="#C0C0C0"
/>
```

### Hide Texts
```jsx
<StarRating
  showMinStarsText={false}
  showRatingText={false}
/>
```

### Full Customization
```jsx
<StarRating
  onChange={(rating) => console.log('New rating:', rating)}
  initialRating={3}
  size={32}
  activeColor="#FBBF24"
  inactiveColor="#D1D5DB"
  minStars={1}
  maxStars={10}
  showMinStarsText={true}
  showRatingText={true}
/>
```

## 📝 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🤝 Contributing


Contributions are welcome!
1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📫 Support

- Create a [GitHub issue](https://github.com/gietmanic/react-star-rating/issues) for bug reports and feature requests
- Follow [@gietmanic](https://github.com/gietmanic) for announcements
<div align="center">

# 🎉 Shapo Review Widgets

**The easiest way to embed beautiful review widgets and testimonial forms into your website**

[![npm version](https://img.shields.io/npm/v/shapo-review-widgets.svg)](https://www.npmjs.com/package/shapo-review-widgets)
[![npm downloads](https://img.shields.io/npm/dm/shapo-review-widgets.svg)](https://www.npmjs.com/package/shapo-review-widgets)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

[Get Started](https://app.shapo.io) • [Examples](https://shapo.io/testimonial-widgets) • [Support](https://shapo.io)

</div>

---

## 🚀 What is Shapo?

Shapo is the leading testimonial and review management platform trusted by **thousands of businesses** to collect, manage, and showcase customer testimonials. Display beautiful review widgets, collect testimonials with custom forms, and build trust with social proof to boost conversions and sales.

![Shapo Hero Image](https://cdn.prod.website-files.com/64dcb53932a2514bd5e24d7a/669faa0da10b0dd15c4833cc_hero-image-shapo.png "Shapo - Testimonial Management Platform")

---

## ✨ Features

- ⚡ **Lightweight** - Minimal bundle size, no heavy dependencies
- 🎨 **Fully Customizable** - Style widgets to match your brand
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🔧 **TypeScript Support** - Full type definitions included
- ⚛️ **React Ready** - Simple React components
- 🌐 **Framework Agnostic** - Works with vanilla HTML too
- 🎯 **Multiple Widget Types** - Grid, Carousel, Marquee, Floating, Badge, and more
- 📝 **Form Integration** - Collect testimonials directly on your site

---

## 📦 Installation

```bash
npm install shapo-review-widgets
```

---

## 🚀 Quick Start

### React Component

```tsx
import { ShapoWidget } from 'shapo-review-widgets';

function App() {
  return (
    <div>
      <ShapoWidget widgetId="abc123def456" />
    </div>
  );
}
```

### HTML/Vanilla JavaScript

```html
<div id="shapo-widget-abc123def456"></div>
<script id="shapo-embed-js" type="text/javascript" src="https://cdn.shapo.io/js/embed.js" defer></script>
```

That's it! 🎉

---

## 📖 Usage

### React Component - Widget

```tsx
import { ShapoWidget } from 'shapo-review-widgets';

function ProductPage() {
  return (
    <div>
      <h1>Customer Reviews</h1>
      <ShapoWidget widgetId="abc123def456" />
    </div>
  );
}
```

### React Component - Form

```tsx
import { ShapoForm } from 'shapo-review-widgets';

function ReviewForm() {
  return (
    <div>
      <h2>Leave a Review</h2>
      <ShapoForm formId="abc123def456" />
    </div>
  );
}
```

### HTML/Manual Embedding

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Product Page</title>
</head>
<body>
  <h1>Customer Reviews</h1>
  
  <!-- Widget -->
  <div id="shapo-widget-abc123def456"></div>
  
  <!-- Form -->
  <div id="shapo-form-your-abc123def456"></div>
  
  <!-- Embed Script (only needed once per page) -->
  <script id="shapo-embed-js" type="text/javascript" src="https://cdn.shapo.io/js/embed.js" defer></script>
</body>
</html>
```

---

## 🎨 Widget Types

Shapo offers a variety of beautiful widget types to showcase your testimonials:

| Widget Type | Description | Use Case | Example |
|------------|-------------|----------|---------|
| **[Reviews Grid Widget](https://shapo.io/testimonial-widgets/grid)** | Display testimonials in a responsive grid layout | Product pages, landing pages | [View Example →](https://shapo.io/testimonial-widgets/grid) |
| **[Single Review Widget](https://shapo.io/testimonial-widgets/single)** | Highlight a single testimonial | Featured reviews | [View Example →](https://shapo.io/testimonial-widgets/single) |
| **[Reviews Carousel Widget](https://shapo.io/testimonial-widgets/carousel)** | Rotating carousel of testimonials | Homepage hero sections | [View Example →](https://shapo.io/testimonial-widgets/carousel) |
| **[Multi Carousel Review Widget](https://shapo.io/testimonial-widgets/multi-carousel)** | Multiple carousels on one page | Comparison pages | [View Example →](https://shapo.io/testimonial-widgets/multi-carousel) |
| **[Review Badge Widget](https://shapo.io/testimonial-widgets/review-badge-widget)** | Rating badge with average score | Trust signals | [View Example →](https://shapo.io/testimonial-widgets/review-badge-widget) |
| **[Reviews Marquee Widget](https://shapo.io/testimonial-widgets/marquee)** | Continuous scrolling testimonials | Footer, sidebar | [View Example →](https://shapo.io/testimonial-widgets/marquee) |
| **[Review List Widget](https://shapo.io/testimonial-widgets/review-list-widget)** | Vertical list of testimonials | Review pages | [View Example →](https://shapo.io/testimonial-widgets/review-list-widget) |
| **[Floating Review Toast](https://shapo.io/testimonial-widgets/review-toast)** | Floating popup notifications | Engagement boost | [View Example →](https://shapo.io/testimonial-widgets/review-toast) |

Customize colors, fonts, layouts, and more through your [Shapo Dashboard](https://shapo.io).

---

## 📚 API Reference

### `ShapoWidget` Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `widgetId` | `string` | ✅ Yes | Your Shapo widget ID |

### `ShapoForm` Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `formId` | `string` | ✅ Yes | Your Shapo form ID |

---

## 💡 Examples

### Multiple Widgets on One Page

```tsx
import { ShapoWidget, ShapoForm } from 'shapo-review-widgets';

function ProductPage() {
  return (
    <div>
      {/* Rating Badge */}
      <ShapoWidget widgetId="badge-widget-id" />
      
      {/* Review Grid */}
      <ShapoWidget widgetId="grid-widget-id" />
      
      {/* Review Form */}
      <ShapoForm formId="form-id" />
    </div>
  );
}
```

### Using Environment Variables

```tsx
import { ShapoWidget } from 'shapo-review-widgets';

function App() {
  return (
    <ShapoWidget widgetId={process.env.REACT_APP_SHAPO_WIDGET_ID} />
  );
}
```

### Standalone Script (No React)

```html
<!-- Multiple widgets on the same page -->
<div id="shapo-widget-abc123def111"></div>
<div id="shapo-widget-dfg123def222"></div>
<div id="shapo-form-qwe123def666"></div>

<!-- Initialize once -->
<script id="shapo-embed-js" type="text/javascript" src="https://cdn.shapo.io/js/embed.js" defer></script>
```

---

## 🔧 How It Works

1. **Render Container** - The component renders a `<div>` with the correct ID format:
   - Widgets: `shapo-widget-{widgetId}`
   - Forms: `shapo-form-{formId}`

2. **Inject Script** - Automatically injects the Shapo embed script if it doesn't already exist

3. **Auto-Initialize** - The embed script finds all Shapo containers and initializes them automatically

That's it! No API calls, no complex setup. Just simple, reliable embedding.

## 📦 TypeScript Support

Full TypeScript definitions are included:

```tsx
import { 
  ShapoWidget, 
  ShapoForm, 
  ShapoWidgetProps, 
  ShapoFormProps 
} from 'shapo-review-widgets';
```

---

## 🎯 Getting Your Widget/Form ID

1. Log in to your [Shapo Dashboard](https://shapo.io)
2. Navigate to **Widgets** or **Forms**
3. Select the widget/form you want to embed
4. Copy the **Widget ID** or **Form ID** from the settings
5. Use it in your code!


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

- 📧 **Email**: [support@shapo.io](mailto:support@shapo.io)
- 📚 **Documentation**: [https://shapo.io/docs](https://shapo.io/docs)
- 💬 **Help Center**: [https://help.shapo.io](https://help.shapo.io)
- 🐛 **Issues**: [GitHub Issues](https://github.com/shapo/shapo-review-widgets/issues)

---

## ⭐ Show Your Support

If this package helped you, please give it a ⭐ on [GitHub](https://github.com/shapo/shapo-review-widgets)!

---

<div align="center">

**Made with ❤️ by [Shapo](https://shapo.io)**

*Collect, manage, and showcase your best testimonials, hassle-free.*

[Website](https://shapo.io) • [Documentation](https://shapo.io/docs) • [Blog](https://shapo.io/blog)

</div>

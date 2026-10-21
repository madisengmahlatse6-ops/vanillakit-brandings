export type Product = {
  id: string
  name: string
  category: 'Tops' | 'Layers' | 'Accessories'
  price: number
  image: string
  alt: string
  color: string
  sizes: string[]
  tag?: string
}

export const products: Product[] = [
  {
    id: 'form-tee',
    name: 'Form Study Tee',
    category: 'Tops',
    price: 38,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',
    alt: 'White heavyweight T-shirt photographed on a model',
    color: 'Chalk',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tag: 'Sample product',
  },
  {
    id: 'signal-hoodie',
    name: 'Signal Hoodie',
    category: 'Layers',
    price: 76,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85',
    alt: 'Dark hooded sweatshirt with a relaxed fit',
    color: 'Ink',
    sizes: ['S', 'M', 'L', 'XL'],
    tag: 'Sample product',
  },
  {
    id: 'studio-cap',
    name: 'Studio Cap',
    category: 'Accessories',
    price: 32,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85',
    alt: 'Minimal black baseball cap',
    color: 'Black',
    sizes: ['One size'],
    tag: 'Sample product',
  },
  {
    id: 'archive-crew',
    name: 'Archive Crew',
    category: 'Layers',
    price: 68,
    image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85',
    alt: 'Neutral crewneck sweatshirt photographed outdoors',
    color: 'Stone',
    sizes: ['S', 'M', 'L', 'XL'],
    tag: 'Sample product',
  },
]

export const services = [
  { number: '01', title: 'Logo design', copy: 'A considered mark built to make your business recognisable wherever it appears.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=85', alt: 'Designer arranging printed identity concepts' },
  { number: '02', title: 'Brand identity', copy: 'A visual system with the colour, type and direction to carry your story forward.', image: 'https://images.unsplash.com/photo-1634942536790-2533d2d7aa16?auto=format&fit=crop&w=900&q=85', alt: 'Printed design materials laid out as a visual identity' },
  { number: '03', title: 'Graphic design', copy: 'Campaigns, digital assets and print pieces designed with a clear point of view.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85', alt: 'Colorful graphic design posters displayed together' },
  { number: '04', title: 'Apparel graphics', copy: 'Original clothing graphics and apparel branding that feel made for your audience.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', alt: 'Streetwear editorial fashion photograph' },
  { number: '05', title: 'Promotional design', copy: 'Menus, launch assets and promotional materials, ready to meet the real world.', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85', alt: 'Printed notebooks and promotional stationery' },
]

export const projects = [
  { name: 'Studio Objects', type: 'Sample project · Packaging direction', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85', alt: 'Reusable bottle shown as a sample packaging concept' },
  { name: 'Off Hours', type: 'Sample project · Apparel graphic', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85', alt: 'Streetwear apparel photographed as a sample project' },
  { name: 'Good Form', type: 'Sample project · Visual identity', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85', alt: 'Stationery and print samples as an identity concept' },
]

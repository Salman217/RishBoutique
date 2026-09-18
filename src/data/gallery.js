/**
 * Rish Boutique work photos (public/work/rish-work-XX.png)
 */

export const GALLERY_TAGS = ['All', 'Pattu', 'Cotton', 'Bridal', 'Designer']

const entries = [
  {
    caption: 'Maroon & pink pattu pair — sharp zari borders, matching boutique fold',
    tag: 'Pattu',
    featured: true,
  },
  {
    caption: 'Red & gold Kanchi pattu — crisp front pleats, border sheen protected',
    tag: 'Pattu',
  },
  {
    caption: 'Purple silk pattu — uniform pleats, zari motifs aligned',
    tag: 'Pattu',
  },
  {
    caption: 'Wine & gold brocade — dense zari, flat body, no crush on border',
    tag: 'Bridal',
  },
  {
    caption: 'Teal & magenta pattu — dual-tone finish, pallu fall set by hand',
    tag: 'Pattu',
  },
  {
    caption: 'Black ikat pattu — gold zari edge, neat diagonal stack',
    tag: 'Designer',
  },
  {
    caption: 'Royal blue & green silk — floral zari, pleats ready to drape',
    tag: 'Pattu',
  },
  {
    caption: 'Two-saree batch — maroon floral & pink paisley, event-ready',
    tag: 'Bridal',
  },
  {
    caption: 'Orange check body, blue gold border — classic Kanchi presentation',
    tag: 'Pattu',
  },
  {
    caption: 'Hot pink pattu — diagonal pleats, copper-gold pallu work',
    tag: 'Pattu',
  },
  {
    caption: 'Cobalt silk — copper zari border, fan pleats pinned clean',
    tag: 'Pattu',
  },
  {
    caption: 'Peach & cream floral pattu — pre-pleated pallu, tissue-ready',
    tag: 'Bridal',
  },
  {
    caption: 'Lavender cotton-silk — metallic border stripes, stack pressed flat',
    tag: 'Cotton',
  },
  {
    caption: 'Teal & lavender duo — side-by-side finish, consistent pleat depth',
    tag: 'Pattu',
  },
  {
    caption: 'Floral print silk with blouse piece — full set folded together',
    tag: 'Designer',
  },
  {
    caption: 'Violet zari pattu beside iron — steam finish, cord-safe workspace',
    tag: 'Pattu',
  },
  {
    caption: 'Striped cotton saree — tan border, corner fold shows pleat work',
    tag: 'Cotton',
  },
  {
    caption: 'Deep magenta pattu — mirror-work border, soft lustre preserved',
    tag: 'Bridal',
  },
  {
    caption: 'Silk blend — light steam, heavy border finished separately',
    tag: 'Pattu',
  },
  {
    caption: 'Everyday cotton — crisp lines for office and casual wear',
    tag: 'Cotton',
  },
  {
    caption: 'Gold-heavy bridal pattu — wide zari, zero scorch on emboss',
    tag: 'Bridal',
  },
  {
    caption: 'Designer cotton — neat wrap after final light inspection',
    tag: 'Designer',
  },
  {
    caption: 'Signature Rish fold — pallu aligned, customer-ready cover',
    tag: 'Pattu',
  },
]

export const workGallery = entries.map((item, index) => ({
  src: `/work/rish-work-${String(index + 1).padStart(2, '0')}.png`,
  featured: item.featured ?? false,
  caption: item.caption,
  tag: item.tag,
}))

/** Photos used in the scroll wire / iron journey (real customer work) */
export const scrollJourneyPhotos = {
  railTop: workGallery[4]?.src,
  railMid: workGallery[10]?.src,
  railLow: workGallery[16]?.src,
  finale: workGallery[0]?.src,
  hero: workGallery.find((i) => i.featured)?.src ?? workGallery[0]?.src,
}

export function getFeaturedWork() {
  return workGallery.find((i) => i.featured) ?? workGallery[0]
}

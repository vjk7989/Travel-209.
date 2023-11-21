// Assuming this code is in a file named bannerSchema.ts

interface BannerSchema {
    name: string;
    title: string;
    type: string;
    fields: BannerField[];
  }
  
  interface BannerField {
    name: string;
    title: string;
    type: string;
    options?: {
      hotspot?: boolean;
    };
  }
  
  const bannerSchema: BannerSchema = {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'buttonText',
        title: 'ButtonText',
        type: 'string',
      },
      {
        name: 'product',
        title: 'Product',
        type: 'string',
      },
      {
        name: 'desc',
        title: 'Desc',
        type: 'string',
      },
      {
        name: 'smallText',
        title: 'SmallText',
        type: 'string',
      },
      {
        name: 'midText',
        title: 'MidText',
        type: 'string',
      },
      {
        name: 'largeText1',
        title: 'LargeText1',
        type: 'string',
      },
      {
        name: 'largeText2',
        title: 'LargeText2',
        type: 'string',
      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'string',
      },
      {
        name: 'saleTime',
        title: 'SaleTime',
        type: 'string',
      },
    ],
  };
  
  export default bannerSchema;
  
import Image from "next/image";
import Link from "next/link";
import hireDev from "@/public/hireDev.png";

export default function FeaturedImage({ post }) {
    let img = "";

    const defaultFeaturedImage = hireDev;
    const defaultHeight = 300;
    const defaultWidth = 200;

    if (post.featuredImage) {
        let size = post.featuredImage.node.mediaDetails.sizes[0];
        img = {
            src: size.sourceUrl,
            width: size.width,
            height: size.height,
        }
    } else {
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight,
            alt: "Default thumbnail for blog post",
        }
    }

    return (
        <div>
            <Image
                src={img.src}
                alt={post.title}
                width={img.width}
                height={img.height}
            />
        </div>
    );

}

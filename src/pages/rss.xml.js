import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
      // 将分类和标签作为自定义数据添加到RSS项目中
      customData: `
				<category>${post.data.category}</category>
				${
          post.data.tags
            ? post.data.tags
                .map((tag) => `<category>${tag}</category>`)
                .join("")
            : ""
        }
			`,
    })),
    // 自定义样式表
    stylesheet: "/rss/styles.xsl",
  });
}

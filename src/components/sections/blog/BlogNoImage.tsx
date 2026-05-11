import { ReadMoreLink } from '@/components/ReadMoreLink'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Badge } from '@/components/ui/Badge'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { posts } from '@/data/posts'
import { ArrowRight } from 'lucide-react'

export default function BlogNoImage() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="From the blog"
          subtitle="Learn how to grow your business with our expert advice."
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 space-y-10 pt-4 lg:grid-cols-2 lg:space-x-20">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-border flex max-w-xl flex-col items-start border-b pb-10 last:border-b-0 lg:nth-last-2:border-b-0"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-muted">
                  {post.date}
                </time>

                <Badge>{post.category.title}</Badge>
              </div>
              <div className="group relative">
                <Heading as="h3" className="mt-3">
                  {post.title}
                </Heading>
                <Text className="mt-5 line-clamp-3" color="muted" size="sm">
                  {post.description}
                </Text>
              </div>

              <ReadMoreLink
                href={`/aktuelles/${post.slug}`}
                className="mt-10 inline-flex"
                icon={ArrowRight}
              >
                Mehr erfahren
              </ReadMoreLink>

              {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-50"
                    width={100}
                    height={100}
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <Text color="muted" size="sm">
                      {post.author.role}
                    </Text>
                  </div>
                </div> */}
            </article>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}

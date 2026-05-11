import { ReadMoreLink } from '@/components/ReadMoreLink'
import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Badge } from '@/components/ui/Badge'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { posts } from '@/data/posts'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function BlogRowImage() {
  return (
    <AppSection>
      <AppContainer>
        <SectionHeader
          title="From the blog"
          subtitle="Learn how to grow your business with our expert advice."
        />

        <div className="mx-auto max-w-2xl space-y-20 pt-4 lg:max-w-4xl">
          {posts.map((post) => (
            <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>

              <div className="">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-muted">
                    {post.date}
                  </time>
                  <Badge>{post.category.title}</Badge>
                </div>

                <div className="group relative max-w-xl border-b border-gray-900/5 pb-6">
                  <Heading as="h3" className="mt-3">
                    {post.title}
                  </Heading>
                  <Text className="mt-5" color="muted" size="sm">
                    {post.description}
                  </Text>
                </div>

                {/* <div className="mt-6 flex border-t border-gray-900/5"> */}
                <ReadMoreLink
                  href={`/aktuelles/${post.slug}`}
                  className="mt-10 inline-flex"
                  icon={ArrowRight}
                >
                  Mehr erfahren
                </ReadMoreLink>

                {/* <Button className="mt-8" variant="outline">
                    Mehr erfahren
                  </Button> */}

                {/* <div className="relative flex items-center gap-x-4">
                      <Image
                        alt=""
                        src={post.author.imageUrl}
                        className="size-10 rounded-full bg-gray-50"
                        height={100}
                        width={100}
                      />
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div> */}
              </div>
              {/* </div> */}
            </article>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}

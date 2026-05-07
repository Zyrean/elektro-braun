import { AppContainer } from '@/components/ui/AppContainer'
import { AppSection } from '@/components/ui/AppSection'
import { Badge } from '@/components/ui/Badge'
import { Heading } from '@/components/ui/Heading'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Text } from '@/components/ui/Text'
import { posts } from '@/data/posts'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogColumnImage() {
  return (
    <AppSection top="lg">
      <AppContainer>
        <SectionHeader
          title="Aktuelles"
          subtitle="Was uns bewegt – Einblicke in Projekte, Veranstaltungen und unser Unternehmen."
        />

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/aktuelles/${post.href}`}
              className="group flex h-full flex-col items-start justify-between group-hover:cursor-pointer"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  alt={post.title}
                  src={post.imageUrl}
                  fill
                  className="rounded-2xl object-cover transition duration-500 group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-muted">
                    {post.date}
                  </time>
                  <Badge className={post.color}>{post.category.title}</Badge>
                </div>

                <div className="relative grow">
                  <Heading as="h3" className="mt-3">
                    {post.title}
                  </Heading>
                  <Text className="mt-5 line-clamp-3" color="muted" size="sm">
                    {post.description}
                  </Text>
                </div>

                <p className="text-primary mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                  Mehr erfahren <ArrowRight className="size-4" />
                </p>

                {/* BACKUPT FOR WHEN WITH AVATAR USW  */}

                {/* <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <Image
                  width={100}
                  height={100}
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-100"
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
            </Link>
          ))}
        </div>
      </AppContainer>
    </AppSection>
  )
}

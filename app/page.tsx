import { del, list } from '@vercel/blob';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NukeButton from './nuke-button';


export default async function Home() {

  const { blobs } = await list();

  return (
    <main className="p-8 flex flex-col items-center gap-8">
      <p className='text-center'>
        Vercel like to make things hard for us.
        <br />
        This is here to make things a little easier.
      </p>
      
      <NukeButton />

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Uploaded At</th>
            <th className="px-4 py-2">Path</th>
            <th className="px-4 py-2">Size</th>
            <th className="px-4 py-2">Download</th>

          </tr>
        </thead>
        <tbody>
          {blobs.map((blob) => (
            <tr key={blob.url}>
              <td className="border px-4 py-2">{blob.uploadedAt.toLocaleString()}</td>
              <td className="border px-4 py-2">{blob.pathname}</td>
              <td className="border px-4 py-2">{blob.size}</td>
              <td className="border px-4 py-2">
                <Link
                  href={blob.url}
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Download
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

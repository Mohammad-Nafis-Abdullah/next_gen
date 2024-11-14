/* eslint-disable @typescript-eslint/no-unused-vars */
// export const dynamic = "force-static";
// import fs from "node:fs";
// import path from "node:path";

// export async function GET(req: Request, res: Response) {
//     console.log("-----------------------------------------");
//     const videoPath = path.resolve(process.cwd(), `src/assets/welcome.mp4`);
//     const stat = fs.statSync(videoPath);
//     const fileSize = stat.size;
//     const range = req.headers.get("Content-Range");
//     console.table({ range });

//     if (range) {
//         const parts = range.replace(/bytes=/, "").split("-");
//         const start = parseInt(parts[0], 10);
//         const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

//         if (start >= fileSize) {
//             return new Response(
//                 "Requested range not satisfiable\n" + start + " >= " + fileSize,
//                 {
//                     status: 416,
//                 }
//             );
//         }

//         const chunkSize = end - start + 1;
//         const file = fs.createReadStream(videoPath, { start, end });
//         const head = {
//             "Content-Range": `bytes ${start}-${end}/${fileSize}`,
//             "Accept-Ranges": "bytes",
//             "Content-Length": chunkSize,
//             "Content-Type": "video/mp4",
//         };

//         const response = new Response(null, {
//             status: 206,
//             headers: head as unknown as HeadersInit,
//         });
//         file.pipe(response);
//     } else {
//         const head = {
//             "Content-Length": fileSize,
//             "Content-Type": "video/mp4",
//         };
//         const response = new Response(null, {
//             status: 200,
//             headers: head as unknown as HeadersInit,
//         });
//         fs.createReadStream(videoPath).pipe(response);
//     }
//     // return new Response(file);
// }

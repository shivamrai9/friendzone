FriendZone - Social Media Application
(Replace with an appropriate banner image URL if needed)

FriendZone is a modern, full-fledged social media platform that enables users to connect, share, and interact seamlessly. Built with cutting-edge technologies like Next.js, TypeScript, and Prisma, the application offers core features such as posting, liking, following, and profile management in a responsive and user-friendly interface.

Features
User Features
Authentication: Integrated with Clerk for secure user sign-ups and logins.
Profile Management: Users can update their profile details, including uploading profile images using Cloudinary.
Post Management:
Create, edit, and delete posts.
Like and interact with posts in real-time.
Following System: Connect with other users by following or unfollowing them.
Admin Features
Manage the database efficiently using Prisma for robust CRUD operations.
Tech Stack
Frontend: Next.js, TypeScript, Tailwind CSS
Backend: Prisma, MySQL
Authentication: Clerk
Media Storage: Cloudinary
Setup Instructions
Prerequisites
Node.js v16+
MySQL database
Cloudinary account
Clerk account
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/shivamrai9/friendzone  
cd friendzone  
Install dependencies:

bash
Copy code
npm install  
Configure environment variables:
Create a .env file in the root directory and add the following variables:

env
Copy code
DATABASE_URL="your_mysql_database_url"  
NEXT_PUBLIC_CLERK_FRONTEND_API="your_clerk_frontend_api"  
CLERK_API_KEY="your_clerk_api_key"  
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"  
CLOUDINARY_API_KEY="your_cloudinary_api_key"  
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"  
Run database migrations:

bash
Copy code
npx prisma migrate dev  
Start the development server:

bash
Copy code
npm run dev  
The application will be available at http://localhost:3000.

Screenshots
(Include relevant screenshots showcasing the UI and features of the application.)

Contributing
Contributions are welcome!

Fork the repository.
Create a feature branch: git checkout -b feature-name
Commit your changes: git commit -m "Add feature-name"
Push to the branch: git push origin feature-name
Open a Pull Request.

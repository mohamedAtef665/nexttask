import Link from "next/link";

export default  function PostDetailsPage() {
	
	return (
		<div>
			<h1>section information</h1>
            <Link href="/posts">
            <button>take me to the PostDetailsPage</button>
            </Link>
			
		</div>
	);
	
}

import PostForm from 'components/posts/PostForm';
import PostBox from 'components/posts/PostBox';
import { isPostfixUnaryExpression } from 'typescript';

export interface PostProps {
    id : string;
    email : string;
    content : string;
    createdAt : string;
    uid : string;
    profileUrl? : string;
    likeCount? : number;
    comments? : any;
}

//더미 데이터
const posts : PostProps[] = [
    {
        id : '1',
        email : 'vsongyev@hanmail.net',
        content : 'content 1',
        createdAt : '2023-12-23',
        uid : '123123',
    },
    {
        id : '2',
        email : 'vsongyev@hanmail.net',
        content : 'content 1',
        createdAt : '2023-12-23',
        uid : '123123',
    },
    {
        id : '3',
        email : 'vsongyev@hanmail.net',
        content : 'content 1',
        createdAt : '2023-12-23',
        uid : '123123',
    },
    {
        id : '4',
        email : 'vsongyev@hanmail.net',
        content : 'content 1',
        createdAt : '2023-12-23',
        uid : '123123',
    },
    {
        id : '5',
        email : 'vsongyev@hanmail.net',
        content : 'content 1',
        createdAt : '2023-12-23',
        uid : '123123',
    },
    {
        id : '6',
        email : 'vsongyev@hanmail.net',
        content : 'content 1',
        createdAt : '2023-12-23',
        uid : '123123',
    },
    {
        id : '7',
        email : 'vsongyev@hanmail.net',
        content : 'content 1',
        createdAt : '2023-12-23',
        uid : '123123',
    },
]


export default function HomePage(){
    return (
        <div className="home">
            <div className="home__title"></div>
            <div className="home__tabs">
                <div className="home__tab home__tab--active">For You</div>
                <div className="home__tab">Following</div>
            </div>
            {/* Post Form */}
            <PostForm />

            {/* Tweet Posts */}
            <div className='post'>
                {posts?.map((post)=>(
                    <PostBox post={post}  key={post?.id}/>
                ))}
            </div>
        </div>
    );
}
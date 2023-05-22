import M from './Category.module.scss';
import CategoryHeader from './CategoryHeader';
import BoxImgText from '../BoxImgText/BoxImgText';

export default function ZenJournaling() {
    return (
        <div>
            <div className={M.bgImg} />

            <div className={M.contentBox}>
                <CategoryHeader
                    title='Zen Journaling'
                    imgFolder='ZenJournaling'
                />

                <div className={M.section}>
                    <BoxImgText
                        paragraph={
                            <>
                                <p>
                                    One powerful tool for self-reflection and self-awareness is journaling. We have compiled a list of journal prompts to help you get started on your journaling journey. These prompts are designed to help you explore your thoughts and feelings, gain clarity and insight, and cultivate a deeper understanding of yourself.
                                </p>
                                <p>
                                    Journaling is a personal and reflective practice that can help you discover your innermost thoughts and emotions. By writing down your thoughts and feelings, you can gain a better understanding of yourself and your experiences, and develop a greater sense of self-awareness. Our journal prompts are designed to guide you through this process, providing you with a starting point for your writing and encouraging you to explore your thoughts and emotions in a deeper and more meaningful way.
                                </p>
                            </>
                        }
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenJournaling/descriptionBackground1.png"
                        paragraph={
                            <>
                                <p>
                                    Here are some ideas that you can practice for your journal today:
                                </p>
                                <p>
                                    Take a moment to pause and think about the things that you're grateful for today. It could be anything - your health, your loved ones, an experience that shaped you, or even just the simple fact that you woke up this morning. Now, ask yourself: Why do these things bring you joy? What about them makes you feel grateful? Reflecting on these questions can help you cultivate a deeper sense of gratitude and appreciation for the good things in your life. Remember, even on the toughest days, there is always something to be grateful for. So take a deep breath, smile, and let gratitude fill your heart. So, what can you be grateful for right now?
                                </p>
                                <p>
                                    Think back to a time in your life when you faced a challenge or obstacle. It might have felt like an insurmountable mountain blocking your path, or a dark cloud casting a shadow over your life. But you overcame it. You found the strength within yourself to push through, to climb that mountain or dispel that cloud. And in doing so, you learned something about yourself. You learned that you are capable of more than you ever imagined. You learned that you are resilient, determined, and strong. So the next time life throws a challenge your way, remember that you have overcome obstacles before and you can do it again. Ask yourself: what challenges are you currently facing, and how can you use your past experiences to help you overcome them?
                                </p>
                            </>
                        }
                        imageWidth='100%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenJournaling/descriptionBackground2.png"
                        paragraph={
                            <>
                                <p>
                                    Take a few minutes to focus on your breath. What thoughts come to mind? Write them down and reflect on why they might be present.
                                </p>
                                <p>
                                    Write about the last time when you felt truly present and engaged in the moment. What were you doing, and how did it make you feel?
                                </p>
                                <p>
                                    Reflect on a relationship in your life that is truly important to you. It could be your mom, dad, a friend, a teacher, or your beloved doggo. What qualities do you appreciate most about them, and how do they make your life better?
                                </p>
                                <p>
                                    Write about a goal that you have for yourself. Why is that goal important for you, and what is the next step you can take to work towards achieving it?
                                </p>
                                <p>

                                    Reflect on a time when you felt stressed or overwhelmed. What strategies did you use to cope with those feelings, and how effective were they?
                                </p>
                            </>
                        }
                        imageFloat='right'
                        imageWidth='40%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenJournaling/descriptionBackground3.png"
                        paragraph={
                            <>
                                <p>
                                    Have you ever been to a place that just fills you with a sense of calm and tranquillity? A place where you can feel your worries and stresses melt away, and you can truly relax and unwind? For many of us, there is such a place - a sanctuary where we can escape the hustle and bustle of daily life and find a moment of peace. So, what about you? Do you have a special place that makes you feel calm and at peace? It could be a park like mine, or maybe a quiet corner of your favourite coffee shop, or even just a cozy spot in your own home. Whatever it is, take some time to visit that place today. Sit down, breathe deeply, and let the peace of that place fill your heart. You'll be amazed at how much better you'll feel.
                                </p>
                                <p>
                                    Reflect on a mistake that you have made in the past. How did you feel about it when it just happened versus now? What did you learn from that experience, and how has it helped you grow?
                                </p>
                            </>
                        }
                        imageFloat='left'
                        imageWidth='50%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenJournaling/descriptionBackground4.png"
                        paragraph={
                            <>
                                <p>
                                    Write about a person who has had a significant impact on your life. What lessons have you learned from them, and how have they influenced the person you are today?
                                </p>
                                <p>
                                    That some ideas from us. Now it’s time for you to put it into practice. Choose a prompt and practice writing it down in your journal today. You will be amazed how writing things down on paper helps you worry less and live more peacefully and intentionally.
                                </p>
                            </>
                        }
                        imageFloat='right'
                        imageWidth='50%'
                    />
                </div>

            </div>
        </div>
    )
}

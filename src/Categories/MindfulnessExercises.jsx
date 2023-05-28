import M from './Category.module.scss';
import CategoryHeader from './CategoryHeader';
import BoxImgText from '../BoxImgText/BoxImgText';

export default function MindfulnessExercises() {
    return (
        <div>
            <div className={M.bgImg} />

            <div className={M.contentBox}>
                <CategoryHeader
                    title='Các bài thực tập sống thiền'
                    imgFolder='MindfulnessExercises'
                />

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/MindfulnessExercises/descriptionBackground1.png"
                        paragraph={
                            <>
                                <p>
                                    Sống thiền với Zenup không chỉ đơn giản là ngồi xuống nhắm mắt, quan sát hơi thở và tập trung vào bản thân.
                                </p>
                                <p>
                                    Zenup lựa chọn lối sống thiền đến từ Sư thầy Pháp Nhật mang tên “Trọn Vẹn Nhận Biết”
                                </p>
                                <p>
                                    “ Sống trọn vẹn với giây phút đang là một cách hoàn toàn nhận biết, đó chính là bạn đang tiếp xúc với sự sống, bạn đang thiền, bạn đang sống thiền”
                                    <br />
                                    -Thầy Pháp Nhật
                                </p>
                                <p>
                                    Khi chúng tôi đồng hành và trải nghiệm các khóa tu tuổi trẻ cùng Thầy Pháp Nhật tại Đức. chúng tôi hiểu rằng sống thiền không chỉ xảy ra trong những khoảnh khắc đặc biệt, mà chính là sự kết nối với cuộc sống hàng ngày. Sống thiền đến từ mọi giây phút đang là trong cuộc sống.  Sống thiền đi vào đời sống và gắn liền với mọi hoạt động chấp tác, từ việc rửa bát, quét lá, nấu ăn, dọn dẹp cho đến việc đi bộ hay thảnh thơi. Thiền không phải là một phương thức trốn tránh cuộc sống, mà là sự trọn vẹn với cuộc sống trong từng giây phút của hiện tại.
                                </p>
                                <p>
                                    “Thiền là trọn vẹn với cuộc sống- bản chất của tu tập, bản chất của thiền không phải là thoát ly cuộc sống mà là trọn vẹn với cuộc sống ngay giây phút đang là này”
                                </p>
                                <p>
                                    Trong các bài thực hành sống thiền này, chúng tôi sẽ chia sẻ thêm các bài tập và trải nghiệm từ các bạn trẻ đã tham gia sống thiền.
                                </p>
                                <p>
                                    Cùng khám phá các hoạt động thiền:
                                </p>
                                <p>
                                    Thiền Hành
                                    <br />
                                    Thiền buông thư
                                    <br />
                                    Thiền Rửa Bát
                                    <br />
                                    Thiền Quét Lá
                                    <br />
                                    Thiền Nấu ăn
                                    <br />
                                    Thiền dọn dẹp
                                </p>
                            </>
                        }
                        imageFloat='left'
                        imageWidth='40%'
                    />
                </div>


                {/*                 <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/MindfulnessExercises/descriptionBackground1.png"
                        paragraph={
                            <>
                                <p>
                                    Daily Mindfulness Exercises for a Happier and More Aware Life
                                </p>
                                <p>
                                    In today's fast-paced world, it's easy to get caught up in the hustle and bustle of daily life and forget to take a moment to pause and reflect. Practicing mindfulness can help us slow down, become more aware of our thoughts and feelings, and cultivate a greater sense of inner peace and happiness. Here are some simple mindfulness exercises that you can practice daily to become more aware and happy.
                                </p>
                            </>
                        }
                        imageFloat='left'
                        imageWidth='40%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/MindfulnessExercises/descriptionBackground2.png"
                        title='Mindful Breathing'
                        paragraph={
                            <>
                                <p>
                                    One of the easiest and most effective mindfulness exercises is mindful breathing. Breathing is something that we all do naturally, but how often do we pay attention to our breath? Mindful breathing is a simple yet powerful way to become more aware of our body and our thoughts.
                                </p>
                                <p>
                                    To get started, find a quiet place where you can sit comfortably and focus on your breath. Take a few deep breaths, inhaling slowly and deeply through your nose and exhaling slowly through your mouth. As you breathe, focus your attention on the physical sensations of your breath. Notice the rise and fall of your chest, the feeling of air moving in and out of your lungs, and the rhythm of your breath.
                                </p>
                                <p>
                                    If your mind starts to wander, gently bring your attention back to your breath and continue to focus on the present moment. You might find it helpful to count your breaths, inhaling for a count of four and exhaling for a count of six. This can help you slow down your breathing and become more relaxed.
                                </p>
                                <p>
                                    Practicing mindful breathing can help you become more aware of your body and your thoughts, reduce stress and anxiety, and increase feelings of calm and relaxation. Try incorporating this exercise into your daily routine, whether it's first thing in the morning, during your lunch break, or before bed.
                                </p>
                            </>
                        }
                        imageFloat='right'
                        imageWidth='50%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/MindfulnessExercises/descriptionBackground3.png"
                        title='Mindful Walking'
                        paragraph={
                            <>
                                <p>
                                    Walking is a simple and effective way to practice mindfulness and become more aware of your surroundings. It's something that we do every day, but how often do we take the time to really pay attention to the experience of walking? Mindful walking is a great way to slow down, become more aware of your body, and connect with the world around you.
                                </p>
                                <p>
                                    To get started, find a spot where you can take a peaceful walk. Maybe it's a nearby park or a quiet trail in the woods. Then, take a deep breath and begin walking. Focus on the physical sensations of walking - the feeling of your feet touching the earth, the movement of your legs, and the rhythm of your breath.                                </p>
                                <p>
                                    As you walk, be a curious observer of the world around you. Take in the colors, shapes, and textures of everything you see. Listen to the sounds of the world, from the chirping of birds to the rustling of leaves in the wind. Notice the smells in the air, from the scent of blooming flowers to the aroma of freshly baked bread.                                </p>
                                <p>
                                    Then, bring your attention inward and become aware of your thoughts. Notice the thoughts that arise and how they make you feel. Observe them without judgment, knowing that they do not define you. Simply acknowledge them and let them pass like clouds in the sky.
                                </p>
                                <p>
                                    Remember to put a gentle smile on your face while practicing. Enjoy the peace and tranquility that comes from being fully present in the moment. Mindful walking is a simple yet powerful way to cultivate mindfulness and become more in tune with the world around you.
                                </p>
                                <p>
                                    So, the next time you're feeling stressed, overwhelmed, or just need a break from the hustle and bustle of daily life, take a mindful walk. You'll be amazed at how much better you'll feel.
                                </p>
                                <p>
                                    Practicing mindful walking can help you become more in tune with your body, increase feelings of relaxation and calm, and reduce stress and anxiety. You might also find that it helps you become more aware of the beauty and wonder of the world around you. Try incorporating this exercise into your daily routine, whether it's during your lunch break, after work, or on the weekends.
                                </p>
                            </>
                        }
                        imageFloat='right'
                        imageWidth='50%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/MindfulnessExercises/descriptionBackground4.png"
                        title='Mindful Eating'
                        paragraph={
                            <>
                                <p>
                                    Mindful eating involves paying attention to the taste, texture, and experience of eating, as well as your thoughts and feelings while you eat. It's a great way to become more aware of your relationship with food and to learn how to eat in a way that is nourishing and satisfying.
                                </p>
                                <p>
                                    To practice mindful eating, find a quiet and peaceful place to eat, free from distractions like your phone or TV. Take a moment to appreciate the food in front of you, noticing its colors, textures, and aromas. Take a deep breath and begin eating slowly, savoring each bite and paying attention to the flavors and sensations in your mouth.
                                </p>
                                <p>
                                    As you eat, be aware of any thoughts or feelings that arise. Are you enjoying your food? Are you feeling hungry or full? Whatever arises, simply observe it without judgment or analysis. Allow yourself to fully experience the present moment, focusing solely on the act of eating.
                                </p>
                                <p>
                                    Practicing mindful eating can help you develop a greater sense of self-awareness and improve your relationship with food. By paying attention to the sensations and experiences of eating, you can cultivate a deeper appreciation for the food you eat and become more in tune with your body's needs and desires. So the next time you sit down to eat, try practicing mindful eating and see how it can positively impact your relationship with food and your overall sense of well-being.
                                </p>
                            </>
                        }
                        imageFloat='right'
                        imageWidth='50%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/MindfulnessExercises/descriptionBackground5.png"
                        title='Mindful Gratitude'
                        paragraph={
                            <>
                                <p>
                                    Gratitude is a powerful tool for cultivating happiness and contentment. It's a way of recognizing and appreciating the good things in our lives, no matter how small they may seem. Practicing mindful gratitude can help us become more aware of the abundance in our lives and can help us cultivate a greater sense of inner peace and happiness.
                                </p>
                                <p>
                                    To practice mindful gratitude, take a few moments each day to reflect on the things in your life that you're grateful for. It could be anything - your health, your loved ones, a beautiful sunset, or even just the fact that you woke up this morning. As you reflect on these things, ask yourself why they bring you joy and what you appreciate about them.
                                </p>
                                <p>
                                    You might find it helpful to keep a gratitude journal, where you write down one or more things each day that you're grateful for. Or you might simply take a few moments each day to reflect on these things in your mind.
                                </p>
                                <p>
                                    Practicing mindful gratitude can help you cultivate a greater sense of appreciation for the good things in your life and reduce feelings of stress and anxiety. It can also help you become more aware of the beauty and wonder of the world around you. Try incorporating a gratitude practice into your daily routine, whether it's through journaling, meditation, or simply taking a few moments to reflect on the things you're grateful for.
                                </p>
                            </>
                        }
                        imageFloat='right'
                        imageWidth='50%'
                    />
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/MindfulnessExercises/descriptionBackground6.png"
                        title='Mindful Listening'
                        paragraph={
                            <>
                                <p>
                                Listening is an important skill for building relationships and connecting with others. But how often do we truly listen to what others are saying? Mindful listening is a way of listening with an open mind and heart, without judgment or distraction.
                                </p>
                                <p>
                                To practice mindful listening, find a quiet place where you can have a conversation with someone without distractions. As you listen, focus your attention on the person speaking. Be fully present in the moment, paying attention to their words, tone of voice, and body language. Avoid interrupting or thinking about what you're going to say next. Simply listen with an open mind and heart.
                                </p>
                                <p>
                                Practicing mindful listening can help you become more in tune with others and build stronger relationships. By taking the time to listen and understand others, you can create a deeper sense of connection and empathy. You might also find that it helps you become more aware of your own thoughts and feelings.
                                </p>
                                <p>
                                Incorporating these mindfulness exercises into your daily routine can help you become more aware, reduce stress and anxiety, and cultivate a greater sense of inner peace and happiness. Try incorporating one or more of these exercises into your day and see how they positively impact your life. Remember, mindfulness is a practice, and it takes time and dedication to cultivate. But with persistence and patience, you can transform your life and find greater happiness and fulfillment.
                                </p>
                            </>
                        }
                        imageFloat='right'
                        imageWidth='50%'
                    />
                </div> */}
            </div>
        </div>
    )
}

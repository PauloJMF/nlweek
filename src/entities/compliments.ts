import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tag } from "./tags";
import { User } from "./user";

@Entity('compliments')
class Compliment{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    user_sender: number
    
    @JoinColumn({name: 'user_sender'})
    @ManyToOne(()=> User)
    useSender : User

    @Column()
    user_receiver: number

    @JoinColumn({name: 'user_receiver'})
    @ManyToOne(()=> User)
    userReceiver : User

    @Column()
    tag_id: number

    @JoinColumn({name: 'tag_id'})
    @ManyToOne(()=> Tag)
    tag: Tag;

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export { Compliment }
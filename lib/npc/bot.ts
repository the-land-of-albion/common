import { Channel, ColorResolvable, GuildChannel, Message } from "discord.js";
import { Npc } from "./npc";


export class NpcBot extends Npc{
    categoryIds: string[]
    channelIds: string[]
    prefix: string;
    constructor(npc: {name: string, avatar: string, color: ColorResolvable}, options: {categoryIds?: string[], channelIds?: string[], prefix: string}){
        super(npc)
        const {categoryIds, channelIds, prefix} = options;
        this.categoryIds = categoryIds || [];
        this.channelIds = channelIds || [];
        this.prefix = prefix;
    }
    canSendMessage<CustomMessage extends Message>(message:CustomMessage){
        if(!this.categoryIds.length && !this.channelIds.length) return true;
        const inValidCategory = this.categoryIds.some((catId) => {
            const c = message.channel as GuildChannel;
            return c.parent?.id === catId; 

        })
        if(inValidCategory) return true;
        const isValidChannel = this.channelIds.some((chaId)=>message.channel.id === chaId);
        return isValidChannel;
    }
    speak<CustomMessage extends Message>(message: CustomMessage, options: {title: string, description?: string}){
        if(!this.canSendMessage(message)) throw new Error("cannot speak in this channel");
        return this.think(options);
    }
}
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { CreditCard, Heart } from 'lucide-react';
import { MpesaIcon, PayPalIcon } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const donationAmounts = [25, 50, 100, 250, 500, 1000];
const paymentMethods = [
    { id: 'credit-card', name: 'Credit Card', icon: CreditCard },
    { id: 'paypal', name: 'PayPal', icon: PayPalIcon },
    { id: 'mpesa', name: 'M-Pesa', icon: MpesaIcon },
];

export default function DonatePage() {
    const [amount, setAmount] = useState('50');
    const [isCustom, setIsCustom] = useState(false);
    const [isRecurring, setIsRecurring] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('credit-card');

    const headerImage = PlaceHolderImages.find(p => p.id === 'donate-page-header');

    const handleAmountChange = (value: string) => {
        setIsCustom(false);
        setAmount(value);
    };

    const handleCustomClick = () => {
        setIsCustom(true);
        setAmount('');
    };
    
    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setAmount(value);
        }
    }

    return (
        <>
            <div className="relative h-64 md:h-80 bg-primary/10">
                {headerImage && (
                    <Image
                        src={headerImage.imageUrl}
                        alt={headerImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={headerImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground p-4">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold">Support Our Mission</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">
                        Your generosity fuels our music and ministry, touching lives around the world.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 lg:py-24 -mt-20">
                <Card className="max-w-4xl mx-auto shadow-2xl">
                    <CardContent className="p-4 sm:p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <h2 className="font-headline text-2xl md:text-3xl font-bold">Choose an Amount</h2>
                                <RadioGroup value={isCustom ? '' : amount} onValueChange={handleAmountChange} className="mt-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {donationAmounts.map((val) => (
                                            <Label
                                                key={val}
                                                htmlFor={`amount-${val}`}
                                                className={cn(
                                                    "flex items-center justify-center p-4 border rounded-md cursor-pointer transition-colors text-lg font-semibold",
                                                    amount === String(val) && !isCustom ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent/50'
                                                )}
                                            >
                                                <RadioGroupItem value={String(val)} id={`amount-${val}`} className="sr-only" />
                                                ${val}
                                            </Label>
                                        ))}
                                    </div>
                                </RadioGroup>
                                
                                <div className="mt-4">
                                    <Label
                                        onClick={handleCustomClick}
                                        className={cn(
                                            "flex items-center justify-center p-4 border rounded-md cursor-pointer transition-colors text-lg font-semibold",
                                            isCustom ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent/50'
                                        )}
                                    >
                                        Custom Amount
                                    </Label>
                                    {isCustom && (
                                        <div className="relative mt-2">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                            <Input
                                                type="text"
                                                placeholder="Enter amount"
                                                value={amount}
                                                onChange={handleCustomChange}
                                                className="pl-6 text-lg h-12"
                                                autoFocus
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center space-x-2 mt-6 p-4 border rounded-md">
                                    <Switch id="recurring-donation" checked={isRecurring} onCheckedChange={setIsRecurring}/>
                                    <Label htmlFor="recurring-donation" className="flex items-center gap-2 font-semibold">
                                        <Heart className="h-5 w-5 text-destructive" /> Make it a monthly gift
                                    </Label>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-headline text-2xl md:text-3xl font-bold">Payment Method</h2>
                                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment} className="mt-6 space-y-4">
                                    {paymentMethods.map(method => (
                                        <Label key={method.id} htmlFor={method.id} className={cn(
                                            "flex items-center gap-4 p-4 border rounded-md cursor-pointer transition-colors",
                                            selectedPayment === method.id ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-accent/50'
                                        )}>
                                            <RadioGroupItem value={method.id} id={method.id} className="h-5 w-5"/>
                                            <method.icon className="h-6 w-6" />
                                            <span className="font-semibold">{method.name}</span>
                                        </Label>
                                    ))}
                                </RadioGroup>

                                <Button size="lg" className="w-full mt-8 text-lg h-14">
                                    Donate ${amount || 0} {isRecurring ? 'Monthly' : ''}
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-2">Secure donation powered by Stripe.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

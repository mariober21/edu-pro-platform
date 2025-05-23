
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, CreditCard, ArrowDownLeft, Wallet, ArrowUpRight } from "lucide-react";

const WalletDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Carteira</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Wallet size={18} className="text-primary" />
              Saldo Disponível
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">€ 2.547,85</p>
            <Link to="/admin/wallet/balance">
              <Button variant="link" className="p-0 h-auto mt-2">Ver Detalhes</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign size={18} className="text-primary" />
              Ganhos do Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">€ 1.250,00</p>
            <p className="text-xs text-muted-foreground">+32% desde o mês passado</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CreditCard size={18} className="text-primary" />
              Último Saque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">€ 500,00</p>
            <p className="text-xs text-muted-foreground">05/05/2025</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ArrowDownLeft size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Venda do Produto - Curso de Marketing</p>
                  <p className="text-sm text-muted-foreground">10/05/2025</p>
                </div>
              </div>
              <p className="font-semibold text-green-600">+€ 297,00</p>
            </div>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ArrowDownLeft size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Comissão de Afiliado</p>
                  <p className="text-sm text-muted-foreground">09/05/2025</p>
                </div>
              </div>
              <p className="font-semibold text-green-600">+€ 85,50</p>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="font-medium">Saque para Conta Bancária</p>
                  <p className="text-sm text-muted-foreground">05/05/2025</p>
                </div>
              </div>
              <p className="font-semibold text-red-600">-€ 500,00</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link to="/admin/wallet/transactions">
              <Button variant="outline" className="w-full">Ver Todas as Transações</Button>
            </Link>
            <Link to="/admin/wallet/payments">
              <Button className="w-full">Realizar Pagamento</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletDashboard;

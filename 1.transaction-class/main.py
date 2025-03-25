class TransactionProcessor:
    def __init__(self):
        self.balance = 0
        self.log = []

    def process_transactions(self, transactions):
        for transaction in transactions:
            transaction_id = transaction['id']
            transaction_type = transaction['type']
            amount = transaction['amount']

            if transaction_type == 'deposit':
                self.balance += amount
                self.log.append(f"Transaction {transaction_id}: Deposit of {amount} successful. Balance: {self.balance}")
            
            elif transaction_type == 'withdrawal':
                if self.balance >= amount:
                    self.balance -= amount
                    self.log.append(f"Transaction {transaction_id}: Withdrawal of {amount} successful. Balance: {self.balance}")
                else:
                    self.log.append(f"Transaction {transaction_id}: Withdrawal of {amount} failed. Insufficient balance: {self.balance}")

    def get_log(self):
        return self.log


transactions = [
    {"id": 1, "type": "deposit", "amount": 200},
    {"id": 2, "type": "withdrawal", "amount": 50},
    {"id": 3, "type": "deposit", "amount": 100},
    {"id": 4, "type": "withdrawal", "amount": 500}
]

processor = TransactionProcessor()

processor.process_transactions(transactions)

logs = processor.get_log()
for log in logs:
    print(log)
